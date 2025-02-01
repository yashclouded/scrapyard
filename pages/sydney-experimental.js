// `npm run dev` to start local server

import React, { useEffect, useRef, useState } from "react";
import Head from 'next/head'
import { Box, Button, Card, Grid, Heading, Image, Link, Text } from 'theme-ui'
import dynamic from 'next/dynamic'
// import { motion } from 'motion/react'

const schedule = [
    { time: '10:00 AM', event: 'Gates Open and Registration' },
    { time: '11:00 AM', event: 'Opening Ceremony' },
    { time: '11:30 AM', event: 'Ice Breakers' },
    { time: '11:45 AM', event: 'Breakfast' },
    { time: '12:15 PM', event: 'Workshops' },
    { time: '1:15 PM', event: 'Lunch' },
    { time: '2:00 PM', event: 'Working Session' },
    { time: '4:15 PM', event: 'Workshops' },
    { time: '5:15 PM', event: 'Working Session' },
    { time: '6:15 PM', event: 'Workshops' },
    { time: '7:15 PM', event: 'Dinner' },
    { time: '8:15 PM', event: 'Lightning Talks' },
    { time: '10:00 PM', event: 'Sleep' },
    { time: '12:00 AM', event: 'Midnight Surprise' },
    { time: '4:30 AM', event: 'Breakfast (Ramadan)' },
    { time: '8:00 AM', event: 'Showers' },
    { time: '9:00 AM', event: 'Breakfast' },
    { time: '10:00 AM', event: 'Workshops' },
    { time: '11:00 AM', event: 'Working Session' },
    { time: '12:00 PM', event: 'Side Activity' },
    { time: '1:00 PM', event: 'Lunch' },
    { time: '2:00 PM', event: 'Final Hour of Work' },
    { time: '3:00 PM', event: 'Submissions' },
    { time: '3:30 PM', event: 'Judging' }
]

const Map = dynamic(() => import('../components/Map'), { ssr: false })

const Flag = () => (
    <Link
        href="https://hackclub.com/"
        target="_blank"
        aria-label="Hack Club's homepage"
        sx={{ position: 'absolute', top: 4, left: 0, zIndex: 2 }}
    >
        <Image
            src="/elements/orpheus-flag.svg"
            alt="Hack Club flag"
            sx={{
                width: [120, 128, 180],
                transformOrigin: '0% 0%',
                transition: 'transform 0.1s',
                ':hover': {
                    transform: 'rotate(0.03turn) scale(1.2) translateY(-4px)'
                }
            }}
        />
    </Link>
)

export const PreviewTracingBeam = () => {
    const containerRef = useRef < HTMLDivElement > null

    const { scrollYProgress } = useScroll({
        container: containerRef,
        offset: ['start start', 'end end']
    })
    const scrollYProgressVelocity = useVelocity(scrollYProgress)
    const [velo, setVelocity] = React.useState(0)
    const contentRef = useRef < HTMLDivElement > null

    // Create a state for the SVG height
    const [svgHeight, setSvgHeight] = useState(0)

    // Measure the content container's height when the component mounts
    useEffect(() => {
        if (contentRef.current) {
            setSvgHeight(contentRef.current.offsetHeight)
        }
    }, [])
    useEffect(() => {
        return scrollYProgressVelocity.onChange(latestVelocity => {
            setVelocity(latestVelocity)
        })
    }, [])

    const y1 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 500]),
        {
            stiffness: 500,
            damping: 90
            //   duration: 3,
        }
    )
    const y2 = useSpring(
        useTransform(scrollYProgress, [0, 1], [50, svgHeight - velo * 2000]),
        {
            stiffness: 500,
            damping: 90
            //   duration: 3,
        }
    )

    return (
        <div ref={containerRef} className="h-[40rem] bg-gray-50 overflow-auto">
            <motion.div className="relative w-full max-w-4xl mx-auto h-full">
                <div className="absolute -left-2 top-3">
                    <motion.div className="ml-[27px] h-4 w-4 rounded-full border border-netural-200 shadow-sm flex items-center justify-center">
                        <motion.div
                            transition={{
                                duration: 0.2,
                                delay: 0.5
                            }}
                            animate={{
                                backgroundColor:
                                    scrollYProgress.get() > 0 ? 'white' : 'var(--emerald-500)',
                                borderColor:
                                    scrollYProgress.get() > 0 ? 'white' : 'var(--emerald-600)'
                            }}
                            className="h-2 w-2 rounded-full border border-neutral-300 bg-white"
                        />
                    </motion.div>
                    <svg
                        viewBox={`0 0 20 ${svgHeight}`}
                        width="20"
                        height={svgHeight} // Set the SVG height
                        className=" ml-4 hidden lg:block"
                        aria-hidden="true"
                    >
                        <motion.path
                            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8
                                } l -18 24V ${svgHeight}`}
                            fill="none"
                            stroke="#9091A0"
                            strokeOpacity="0.16"
                            transition={{
                                duration: 10
                            }}
                        ></motion.path>
                        <motion.path
                            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8
                                } l -18 24V ${svgHeight}`}
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="1.25"
                            className="motion-reduce:hidden"
                            transition={{
                                duration: 10
                            }}
                        ></motion.path>
                        <defs>
                            <motion.linearGradient
                                id="gradient"
                                gradientUnits="userSpaceOnUse"
                                x1="0"
                                x2="0"
                                y1={y1}
                                y2={y2}
                                transition={{
                                    duration: 10
                                }}
                            >
                                <stop stopColor="#18CCFC" stopOpacity="0"></stop>
                                <stop stopColor="#18CCFC"></stop>
                                <stop offset="0.325" stopColor="#6344F5"></stop>
                                <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
                            </motion.linearGradient>
                        </defs>
                    </svg>
                </div>
                <Content ref={contentRef} />
            </motion.div>
        </div>
    )
}

export default function ExampleCity() {
    return (
        <Box
            sx={{
                background:
                    "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
                backgroundSize: ['1100px', '1100px', '1100px', 'contain'],
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                overflowX: 'hidden'
            }}
        >
            <Head>
                {/* TODO: Change [EXAMPLECITY] to your event's city */}
                <title>Scrapyard Sydney</title>
            </Head>
            <Flag />
            <Box
                sx={{
                    width: '100%',
                    height: ['80vh', '80vh', '90vh'],
                    bg: 'transparent',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '20px'
                }}
            >
                <Box
                    sx={{
                        position: 'relative'
                    }}
                >
                    <Image
                        sx={{
                            width: '600px',

                            maxWidth: '70vw',

                            objectFit: 'contain'
                        }}
                        src="/city/sydney/wordmark.svg"
                        alt="Scrapyard Sydney logo"
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}
                ></Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Box
                        sx={{
                            background: "url('/elements/ripped-paper.png')",
                            backgroundSize: 'cover',
                            height: 'fit-content',
                            paddingBottom: '8%',
                            paddingTop: '7%',
                            paddingLeft: '7%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            width: 'min(500px, calc(100vw - 30px))',
                            filter: 'drop-shadow(5px 5px 5px #000000AA)',
                            position: 'relative',
                            zIndex: 20
                        }}
                    >
                        <Text
                            sx={{
                                fontFamily: 'moonblossom',
                                fontSize: '0.9rem',
                                marginLeft: '30px',
                                color: 'black',
                                fontStyle: 'italic'
                            }}
                        >
                            Made Possible By:
                        </Text>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '10px'
                            }}
                        >
                            <Link
                                href="https://www.polymaker.com/"
                                target="_blank"
                                sx={{ zIndex: 2, display: 'flex', justifyContent: 'center' }}
                                draggable="false"
                            >
                                <Image
                                    sx={{
                                        width: '70%',
                                        objectFit: 'contain'
                                    }}
                                    src="/city/sydney/sponsors/polymaker.webp"
                                    alt="Polymaker Logo"
                                    draggable="false"
                                />
                            </Link>
                            <Link
                                href="https://www.littlebirdelectronics.com.au/"
                                target="_blank"
                                sx={{ zIndex: 2, display: 'flex', justifyContent: 'center' }}
                                draggable="false"
                            >
                                <Image
                                    sx={{
                                        width: '80%',
                                        objectFit: 'contain'
                                    }}
                                    src="/city/sydney/sponsors/littlebirdelectronics.png"
                                    alt="Little Bird Electronics Logo"
                                    draggable="false"
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            zIndex: 1,
                            width: 'max-content',
                            backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            width: '75%',
                            position: 'relative',
                            zIndex: 30,
                            top: '-15%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            py: '3%',
                            filter: 'drop-shadow(5px 5px 5px #00000099)'
                        }}
                    >
                        <Heading
                            as="h2"
                            sx={{
                                fontFamily: 'p22-stanyan',
                                mx: '8%',
                                p: 0,
                                wordBreak: 'keep-all',
                                whiteSpace: 'nowrap',
                                width: 'max-content',
                                fontSize: ['1.2em', '1.4em']
                            }}
                        >
                            {/* TODO: Change [EXAMPLECITY] to your event's city */}
                            Sydney - March&nbsp;15-16
                        </Heading>
                    </Box>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100vw'
                    }}
                >
                    <Image
                        sx={{
                            width: '10%',
                            height: '10%',
                            zIndex: 2,
                            position: 'absolute',
                            top: '50%',
                            left: '10%'
                        }}
                        src="/elements/stars/blue.png"
                        alt="Blue paper star"
                        draggable="false"
                    />
                    <Image
                        sx={{
                            width: '10%',
                            height: '10%',
                            zIndex: 2,
                            position: 'absolute',
                            top: '55%',
                            right: '15%'
                        }}
                        src="/elements/stars/yellow.png"
                        alt="Yellow paper star"
                        draggable="false"
                    />
                    <Image
                        sx={{
                            width: '10%',
                            height: '10%',
                            zIndex: 2,
                            position: 'absolute',
                            top: '70%',
                            left: '20%',
                            transform: 'rotate(180deg)'
                        }}
                        src="/elements/stars/pink.png"
                        alt="Pink paper star"
                        draggable="false"
                    />
                </Box>
                <Link
                    href="https://forms.hackclub.com/scrapyard-signup?event=sydney"
                    target="_blank"
                    draggable="false"
                >
                    <Box
                        sx={{
                            backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            position: 'fixed',
                            right: ['2%'],
                            top: ['4%'],
                            filter: 'drop-shadow(5px 5px 5px #000)',
                            transition: 'transform 0.2s',
                            ':hover': {
                                transform: 'scale(1.1)'
                            },
                            zIndex: 30,
                            minWidth: '8em',
                            padding: '15px'
                        }}
                        draggable="false"
                    >
                        <Heading
                            as="h2"
                            sx={{
                                fontFamily: 'moonblossom',
                                textAlign: 'center',
                                padding: ['2%', '8%'],
                                fontSize: ['1.2em', '1.4em'],
                                textTransform: 'inherit!important',
                                width: '100%'
                            }}
                        >
                            SIGN&nbsp;UP
                        </Heading>
                    </Box>
                </Link>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    background: "url('/elements/paper-top.png')",
                    backgroundSize: 'contain',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                    position: 'relative',
                    height: '23vw'
                }}
            >
                <img
                    src="/elements/trash-can.png"
                    style={{
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        width: '70vw',
                        transform: 'translateY(-40%)',
                        zIndex: 7
                    }}
                    draggable="false"
                />
            </Box>
            <Box
                sx={{
                    width: '100%',
                    // background: "linear-gradient(#F5F5F5, #F2F2F2)",
                    background: 'url(/backgrounds/ripped-paper.png)',
                    backgroundSize: 'cover',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '20px',
                    pt: 6,
                    px: 4,
                    position: 'relative'
                }}
                
            >
                <PreviewTracingBeam />
                <Box>
                    <Text>More Content</Text>
                </Box>
            </Box>
        </Box>
        
    )
}
