import Head from "next/head";
import { Box, Card, Grid, Heading, Image } from "theme-ui";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), { ssr:false });
export default function Home() {
    return (
        <Box sx={{
            background: "url('/backgrounds/cutting-mat.png'), linear-gradient(#337D78, #337D78)",
                backgroundSize: ["1100px", "1100px", "1100px", "contain"],
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
        }}>
            <Head>
                <title>Scrapyard</title>
            </Head>
            <Box sx={{
                width: "100%",
                height: "100vh",
                bg: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            }}>
                <Image sx={{
                    width: "600px",

                    maxWidth: "70vw",

                    objectFit: "contain",
                }} src="/elements/wordmark.svg" alt="BRT" />
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Box sx={{
                        background: "url('/elements/ripped-paper.png')",
                        backgroundSize: "cover",
                        // aspectRatio: "1080/338.4",
                        // padding: "8%",
                        // paddingLeft: "7%",
                        display: "block",

                        width: "min(500px, calc(100vw - 30px))",
                        filter: "drop-shadow(5px 5px 5px #000000AA)"
                    }}>
                        <Heading as="h2" sx={{
                            fontFamily: "moonblossom",
                            textAlign: "center",
                            margin: "8%"
                        }}>Build stupid projects, get stupid prizes.</Heading>
                    </Box>
                    <Box sx={{
                            zIndex: 1,
                            width: "max-content",
                            backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            width: "75%",
                            position: "relative",
                            top: "-15%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            pt: "3%",
                            filter: "drop-shadow(5px 5px 5px #00000099)"
                        }}>
                                <Heading as="h2" sx={{
                                fontFamily: "p22-stanyan",
                                mx: "8%",
                                p: 0,
                                wordBreak: "keep-all",
                                whiteSpace: "nowrap",
                                width: "max-content"
                            }}>100+&nbsp;Cities&nbsp;worldwide&nbsp;March&nbsp;13-14</Heading>
                                <Heading as="h2" sx={{
                                    fontFamily: "p22-stanyan",
                                    mx: "8%",
                                    my: "3%",
                                    p: 0,
                                    wordBreak: "keep-all",
                                    whiteSpace: "nowrap",
                                    width: "min-content"

                                }}>Los&nbsp;Angeles&nbsp;February&nbsp;15-16</Heading>
                        </Box>
                </Box>
                <Box sx={{
                    position: "absolute",
                    width: "100vw",
                    height: "100vw"
                }}>
                    <Image sx={{
                        width: "10%",
                        height: "10%",
                        zIndex: 2,
                        position: "absolute",
                        top: "50%",
                        left: "10%"
                    }} src="/elements/stars/blue.png" alt="Blue paper star" />
                    <Image sx={{
                        width: "10%",
                        height: "10%",
                        zIndex: 2,
                        position: "absolute",
                        top: "55%",
                        right: "15%"
                    }} src="/elements/stars/yellow.png" alt="Yellow paper star" />
                    <Image sx={{
                        width: "10%",
                        height: "10%",
                        zIndex: 2,
                        position: "absolute",
                        top: "70%",
                        left: "20%"
                    }} src="/elements/stars/pink.png" alt="Pink paper star" />
                </Box>
                <Box as="a" href="https://forms.hackclub.com/t/eWz6Un4TLUus" sx={{
                    backgroundImage: "url('/elements/yellow-strip@stretch.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    position: "absolute",
                    right: "2%",
                    top: "4%",
                    filter: "drop-shadow(5px 5px 5px #000)"
                }}>
                    <Heading as="h2" sx={{
                        fontFamily: "moonblossom",
                        textAlign: "center",
                        margin: "8%"
                    }}>Sign up to run a scrapyard event</Heading>
                </Box>
            </Box>

            <Box sx={{
                width: "100%",
                background: "url('/elements/paper-top.png')",
                backgroundSize: "contain",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                position: "relative",
                height: "23vw"
            }}>
                <img src="/elements/trash-can.png" style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    width: "70vw",
                    transform: "translateY(-40%)",
                    zIndex: 7
                }} />
            </Box>
            <Box sx={{
                width: "100%",
                // background: "linear-gradient(#F5F5F5, #F2F2F2)",
                background: "url(/backgrounds/ripped-paper.png)",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                pt: 6,
                px: 4,
                position: "relative",
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%"
                }}>
                    <Image src="/elements/orpheus-doodle.svg" />
                    <Box sx={{
                        maxWidth: "40vw",
                        padding: "40px",
                        zIndex: 1,
                        backgroundImage: "url(/elements/sticky-note.svg)",
                        backgroundSize: "cover",
                        filter: "drop-shadow(5px 5px 5px #000000AA)"
                    }}>
                        <Heading sx={{
                            textDecoration: "underline"
                        }}>What's Scrapyard?</Heading>
                        <p style={{
                            fontSize: "1.25em"
                        }}>Scrapyard is a global hackathon by high schoolers running in Los Angeles and over 100+ other cities,
                            with a "scrappy" theme of stupid projects! It's organized by Hack Club, a 501c(3) nonprofit that supports
                            a global community of over 48,000 high school makers.
                        </p>
                    </Box>
                </Box>
                <Box sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    zIndex: 1
                }}>
                    <Image src="/elements/doodles/arrow.svg" sx={{ position: "absolute", left: "5%", top: "0%"}} />
                    <Image src="/elements/doodles/pinkcircle.svg" sx={{ position: "absolute", left: "20%", top: "0%"}} />
                    <Image src="/elements/doodles/yellowcircle.svg" sx={{ position: "absolute", left: "8%", top: "70%"}} />
                    <Image src="/elements/doodles/bluesquiggle.svg" sx={{ position: "absolute", left: "8%", top: "84%"}} />
                    <Image src="/elements/doodles/yellowlines.svg" sx={{ position: "absolute", left: "37%", top: "80%"}} />
                    <Image src="/elements/doodles/bluecircle.svg" sx={{ position: "absolute", right: "30%", top: "78%"}} />
                    <Image src="/elements/doodles/pinksquiggle.svg" sx={{ position: "absolute", right: "10%", top: "80%"}} />
                    <Image src="/elements/doodles/bluedrops.svg" sx={{ position: "absolute", right: "10%", top: "0%"}} />
                </Box>
            </Box>

            <Box sx={{
                width: "100%",
                background: "url('/backgrounds/ripped-paper-bottom.png')",
                backgroundSize: "cover",
                transform: "scale(1.05)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",

                height: "17.03212647vw",
                position: "relative",
            }}>
                </Box>

<Box>
</Box>

            <Box sx={{
                // backgroundImage: "url(/backgrounds/confetti.png)",
                alignItems:"center",
                display:"flex",
                flexDirection:"column",
            }}>
                <Box sx={{
                    backgroundImage: "url(/elements/ripped-paper-strip.svg)",
                    // backgroundSize: "cover!important",
                    // display: "block",
                    // width: "30vw",
                    height: "30vh",
                    width: "46.8vw",
                    alignItems:  "center",
                    justifyContent: "center",
                    margin: "3vh",

                }}>
                    <Heading as="h1" sx={{
                        mt: "12vh",
                        mx: "1vw",
                        fontWeight:"lighter",
                        textAlign: "center",
                        textDecoration: "underline",
                        
                    }}>FIND AN EVENT NEAR YOU, OR START ONE!</Heading>
                </Box>
                <Box sx={{
                    width: "80%",
                    height: "75vh",
                    alignItems:"center",
                    display:"flex",
                    flexDirection:"column",
                    mb: "10vh"

                    }}>

                    <Map />
                </Box>
            </Box>


            <Box sx={{
                width: "100%",
                background: ["url('/backgrounds/bulletin@vertical.svg')", "url('/backgrounds/bulletin@vertical.svg')", "url('/backgrounds/bulletin.svg')"],
                backgroundSize: "cover!important",
                display: "block",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                overflow: "visible",
                gap: "20px",
                height: ["151.37794951vw", "151.37794951vw", "64.45447188vw"],
                position: "relative",
            }}>
                <Box sx={{ display: "flex", width: "100%", height: "100%", flexWrap: "wrap",
                p: "4vw", position: "relative",
                overflow: "visible",
                justifyContent: ["space-around", "space-around", null],
                pb: "12vw"
                }}>
                    <Box sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "start",
                        height: "min-content",
                    }}>
                        <Box sx={{
                                                    background: "url('/elements/stapled-paper.png')",
                                                    backgroundSize: "contain",
                                                    backgroundRepeat: "no-repeat",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                            height: "100px",
                            width: "400px"
                        }}>
                            <Heading as="h2" sx={{
                                textAlign: "center"
                            }}>Here's what we've done in the past</Heading>
                        </Box>
                    </Box>
                    <Box as="a" href="https://assemble.hackclub.com" target="_blank" sx={{
                    background: "url('/elements/polaroids/1.svg')",
                    width: ["35.5vw", "35.5vw", "22.5vw"],
                    height: ["35.5vw", "35.5vw", "22.5vw"],
                    transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "block"

                    }}>
                    </Box>
                    <Box as="a" href="https://outernet.hackclub.com" target="_blank" sx={{
                    background: "url('/elements/polaroids/2.svg')",
                    width: ["35.5vw", "35.5vw", "22.5vw"],
                    height: ["35.5vw", "35.5vw", "22.5vw"],
                    transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    marginTop: "7vw"

                    }}>
                    </Box>
                    <Box as="a" href="https://wonderland.hackclub.com" target="_blank" sx={{
                    background: "url('/elements/polaroids/3.svg')",
                    width: ["35.5vw", "35.5vw", "22.5vw"],
                    height: ["35.5vw", "35.5vw", "22.5vw"],
                    transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "block"

                    }}>
                    </Box>
                    <Box as="a" href="https://apocalypse.hackclub.com" target="_blank" sx={{
                    background: "url('/elements/polaroids/4.svg')",
                    width: ["35.5vw", "35.5vw", "22.5vw"],
                    height: ["35.5vw", "35.5vw", "22.5vw"],
                    transform: ["scale(1.4)", "scale(1.4)", "scale(1.2)"],
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "block",
                    marginTop: "7vw"

                    }}>
                    </Box>
                    <Box as="a" href="https://counterspell.hackclub.com" target="_blank" sx={{
                    background: "url('/elements/polaroids/falling.svg')",
                    width: ["38.5vw", "38.5vw", "25vw"],
                    height: ["38.5vw", "38.5vw", "25vw"],
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "block", 
                    position: "absolute",
                    bottom: "0",
                    right: "10vw",
                    transform: "translateY(50%)",
                    zIndex: 10


                    }}>
                    </Box>
                </Box>
            </Box>


            <Box sx={{
                width: "100%",
                background: "url('/backgrounds/lined-paper.png')",
                backgroundSize: "cover!important",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                p: 5,
                pt: 6,
                position: "relative",
            }}>
                <Heading as="h1" sx={{
                    mb: 5,
                    position: "relative"
                }}>Frequently Asked Questions
                <Image src="/elements/doodles/blue-underline.svg" sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%) translateY(75%)",
                }} />
                </Heading>
                <Grid columns={[1, 1, 2]} gap={4}>
                    {Object.entries({
                        "What is scrapyard?": "Scrapyard is a hackathon for high school students, organized by the students of the BRT High School.",
                        "When is Scrapyard?": "Scrapyard will be held on February 15-16, 2024.",
                        "Where is Scrapyard?": "Scrapyard will be held at the BRT High School.",
                        "How can I participate?": "Participation details will be announced soon.",
                    }).map(([question, answer], i) => {
                            return (
                                <Card sx={{
                                    background: `url('/elements/doodles/boxes/${i % 6 + 1}.svg')`,
                                    backgroundSize: "100% 100%",
                                    backgroundRepeat: "no-repeat",
                                    boxShadow: "none"
                                }}>
                                    <Heading as="h2">{question}</Heading>
                                    <p>{answer}</p>
                                </Card>
                            );
                    })}
                </Grid>
                <Heading as="h2" sx={{
                    mt: 6,
                    position: "relative"
                }}>Scrapyard
                <Image src="/elements/doodles/blue-underline.svg" sx={{
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translateX(-50%) translateY(75%)",
                }} />
                </Heading>
            </Box>
        </Box>
    )
}