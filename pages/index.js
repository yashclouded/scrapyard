import Head from "next/head";
import { Box, Card, Grid, Heading } from "theme-ui";

export default function Home() {
    return (
        <>
            <Head>
                <title>Scrapyard</title>
            </Head>
            <Box sx={{
                width: "100%",
                height: "100vh",
                background: "url('https://cloud-itwtbqgju-hack-club-bot.vercel.app/0group_19.svg')",
                backgroundSize: "cover",
                backgroundPosition: "-13px -13px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
            }}>
                <img src="/brt.png" alt="BRT" />
                <Box sx={{
                    background: "url('/note.png')",
                    backgroundSize: "cover",
                    padding: "40px",
                }}>
                    <Heading as="h1">February 15-16, 2024</Heading>
                </Box>
                Scrapyard!
            </Box>
            <Box sx={{
                width: "100%",
                background: "url('/papercrump.svg')",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                py: 6,
                position: "relative",
                paddingTop: "600px"
            }}>
                <img src="/trash.png" style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    width: "25vw",
                    transform: "translateY(-20%)",
                    zIndex: 7
                }} />
                <img src="/2.png" style={{ // post it note
                    position: "absolute",
                    top: "0px",
                    left: "max(12vw, 20px)",
                    transform: "translateY(-20%)",
                    width: "max(40vw, 300px)",
                    zIndex: 9
                }} />
                <img src="/paperball1.svg" style={{
                    position: "absolute",
                    top: "10vw",
                    left: "-2vw",
                    width: "20vw",
                    zIndex: 6
                }} />
                <img src="/paperball2.svg" style={{
                    position: "absolute",
                    top: "10vw",
                    left: "48vw",
                    width: "26vw",
                    zIndex: 6
                }} />
                <Box sx={{
                    background: "url('/note.png')",
                    backgroundSize: "cover",
                }}>
                    <Heading as="h1">February 15-16, 2024</Heading>
                </Box>
                Scrapyard!
            </Box>
            <Box sx={{
                width: "100%",
                background: "url('/navy_paper_bg.svg')",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                py: 6,
                px: 4,
                position: "relative",
            }}>
                <Heading as="h1" sx={{
                    color: "white"
                }}>Scrapyard FAQs</Heading>
                <Grid columns={[1, 2, 3]} gap={4}>
                    <Card sx={{

                    }}>
                        <Heading as="h2">What is Scrapyard?</Heading>
                        <p>Scrapyard is a hackathon for high school students, organized by the students of the BRT High School.</p>
                    </Card>
                    <Card>
                        <Heading as="h2">When is Scrapyard?</Heading>
                        <p>Scrapyard will be held on February 15-16, 2024.</p>
                    </Card>
                    <Card>
                        <Heading as="h2">Where is Scrapyard?</Heading>
                        <p>Scrapyard will be held at the BRT High School.</p>
                    </Card>
                    <Card>
                        <Heading as="h2">How can I participate?</Heading>
                        <p>Participation details will be announced soon.</p>
                    </Card>
                    <Card>
                        <Heading as="h2">What are the prizes?</Heading>
                        <p>Prizes will be announced soon.</p>
                    </Card>
                    <Card>
                        <Heading as="h2">How can I sponsor Scrapyard?</Heading>
                        <p>Contact us at <a href="mailto:scrapyard@hackclub.com">scrapyard@hackclub.com</a></p>
                    </Card>
                </Grid>
            </Box>
        </>
    )
}