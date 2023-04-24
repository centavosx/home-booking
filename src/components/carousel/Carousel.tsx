import { Fade, Grow, Slide, Paper } from '@mui/material'
import { Button } from 'components/button'
import React, { useEffect, useState, useCallback, useRef } from 'react'
import { Flex, FlexProps } from 'rebass'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import IconButton from '@mui/material/IconButton'

export const Carousel = ({
  carouselContent,
  duration,
  fadeDuration,
  children,
  sx,
  contentProps,
  nextOrPrevColor,
  ...other
}:
  | FlexProps & {
      carouselContent: JSX.Element[]
      duration?: number
      fadeDuration?: number
      contentProps?: FlexProps
      nextOrPrevColor?: string
    }) => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i === carouselContent.length - 1 ? 0 : i + 1))
    }, (duration ?? 5) * 1000)

    return () => clearInterval(interval)
  }, [index, setIndex, carouselContent, duration])

  return (
    <Flex flexDirection={'row'} width={'100%'} sx={{ position: 'relative' }}>
      {carouselContent?.map((comp, i) => (
        <Fade
          in={i === index}
          key={i}
          mountOnEnter
          unmountOnExit
          style={{
            width: '100%',
            position: i === index ? 'relative' : 'absolute',
            transitionDelay: i === index ? `${fadeDuration ?? 50}ms` : '0ms',
          }}
        >
          {comp}
        </Fade>
      ))}
      <Flex
        sx={{
          position: 'absolute',
          zIndex: 1,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          ...sx,
        }}
        {...other}
      >
        <Flex flexDirection={'row'} width="100%" height={'100%'}>
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'start',
            }}
          >
            <IconButton
              aria-label="prev"
              sx={{
                height: '100%',
                borderRadius: 0,
              }}
              onClick={() =>
                setIndex((v) => (v == 0 ? carouselContent.length - 1 : v - 1))
              }
            >
              <NavigateBeforeIcon
                fontSize="large"
                style={{ color: nextOrPrevColor ?? '#f7efe3' }}
              />
            </IconButton>
          </Flex>
          <Flex flex={1} {...contentProps}>
            {children}
          </Flex>
          <Flex sx={{ alignItems: 'center', justifyContent: 'end' }}>
            <IconButton
              aria-label="next"
              sx={{
                height: '100%',
                borderRadius: 0,
              }}
              onClick={() =>
                setIndex((v) => (v == carouselContent.length - 1 ? 0 : v + 1))
              }
            >
              <NavigateNextIcon
                fontSize="large"
                style={{ color: nextOrPrevColor ?? '#f7efe3' }}
              />
            </IconButton>
          </Flex>
        </Flex>
        <Flex
          sx={{
            position: 'absolute',
            bottom: 10,
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 2,
          }}
          width={'100%'}
        >
          {carouselContent?.map((_, i) => (
            <Button
              key={i}
              style={{
                borderRadius: '100%',
                minWidth: 8,
                height: 8,
                width: 8,
                padding: 0,
                backgroundColor: i === index ? '#f7efe3' : 'rgba(1,1,1,0.5)',
              }}
              onClick={() => setIndex(i)}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export const SecondCarousel = ({
  duration,
  fadeDuration,
  children,
  sx,
  contentProps,
  nextColorButton,
  ...other
}:
  | FlexProps & {
      duration?: number
      fadeDuration?: number
      contentProps?: FlexProps
      nextColorButton?: string
    }) => {
  const containerRef = useRef(null)
  const [index, setIndex] = useState<number>(0)
  const [dir, setDir] = useState<'left' | 'right' | 'up' | 'down' | undefined>(
    'right'
  )
  useEffect(() => {
    let interval = setInterval(() => {
      setDir('right')
      setIndex((i) =>
        !!(children as any)[0]
          ? i === (children as any[]).length - 1
            ? 0
            : i + 1
          : 0
      )
    }, (duration ?? 5) * 1000)

    return () => clearInterval(interval)
  }, [index, setIndex, children, duration, setDir])

  const nextOrPrev = useCallback(
    (number: number, dir: 'left' | 'right' | 'up' | 'down' | undefined) => {
      setDir(dir)
      setIndex(number)
    },
    [setIndex, setDir]
  )

  return (
    <Flex flexDirection={'row'} width={'100%'} sx={{ position: 'relative' }}>
      <Flex
        sx={{
          zIndex: 1,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          ...sx,
        }}
        {...other}
      >
        <Flex
          flexDirection={'row'}
          width="100%"
          height={'100%'}
          sx={{ position: 'relative', justifyContent: 'space-between' }}
        >
          <Flex
            sx={{
              alignItems: 'center',
              justifyContent: 'start',
              zIndex: 1,
            }}
          >
            <IconButton
              aria-label="prev"
              sx={{
                height: '100%',
                borderRadius: 0,
              }}
              onClick={() =>
                !!(children as any)[0]
                  ? nextOrPrev(
                      index == 0 ? (children as any[]).length - 1 : index - 1,
                      'right'
                    )
                  : null
              }
            >
              <NavigateBeforeIcon
                fontSize="large"
                sx={{ color: nextColorButton ?? '#f7efe3' }}
              />
            </IconButton>
          </Flex>
          <Flex ref={containerRef} {...contentProps}>
            {!!(children as any)[index] ? (
              (children as any)?.map((comp: JSX.Element, i: number) => (
                <Slide
                  in={i === index}
                  direction={dir}
                  key={i}
                  mountOnEnter
                  unmountOnExit
                  container={containerRef?.current}
                  style={{
                    flex: 1,
                    position: i === index ? 'relative' : 'absolute',
                    display: i === index ? 'block' : 'none',
                    transitionDelay:
                      i === index ? `${fadeDuration ?? 100}ms` : '0ms',
                  }}
                >
                  <Paper
                    sx={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      boxShadow: 'none',
                    }}
                  >
                    {comp}
                  </Paper>
                </Slide>
              ))
            ) : (
              <Slide
                mountOnEnter
                unmountOnExit
                style={{
                  width: '100%',
                  position: 'relative',
                  transitionDelay: `${fadeDuration ?? 50}ms`,
                }}
              >
                <Paper sx={{ backgroundColor: 'transparent', border: 0 }}>
                  {children as JSX.Element}
                </Paper>
              </Slide>
            )}
          </Flex>
          <Flex sx={{ alignItems: 'center', justifyContent: 'end' }}>
            <IconButton
              aria-label="next"
              sx={{
                height: '100%',
                borderRadius: 0,
              }}
              onClick={() =>
                !!(children as any)[0]
                  ? nextOrPrev(
                      index == (children as any[]).length - 1 ? 0 : index + 1,
                      'left'
                    )
                  : null
              }
            >
              <NavigateNextIcon
                fontSize="large"
                sx={{ color: nextColorButton ?? '#f7efe3' }}
              />
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
