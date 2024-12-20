import Head from "next/head";
import { Box, Heading } from "theme-ui";

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
                    transform: "translateY(-20%)"
                }} />
                <img src="/2.png" style={{
                    position: "absolute",
                    top: "0px",
                    left: "15%",
                    transform: "translateY(-20%)",
                    width: "400px"
                }} />
                <img src="/paperball1.svg" style={{
                    position: "absolute",
                    top: "200px",
                    left: "5%",
                    width: "300px"
                }} />
                <img src="/paperball2.svg" style={{
                    position: "absolute",
                    top: "250px",
                    left: "55%",
                    width: "300px"
                }} />
                <Box sx={{
                    background: "url('/note.png')",
                    backgroundSize: "cover",
                }}>
                    <Heading as="h1">February 15-16, 2024</Heading>
                </Box>
                Scrapyard!
            </Box>
        </>
    )
}