import { Box, Heading} from "theme-ui";

export default function IndexCard({ title, children, url}) {
    return (
        <Box
        sx={{
            p: 4,
            borderRadius: 4,
            boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
            bg: 'white',
        }}>
        <Heading as='h2'>{title}</Heading>
        {children}
        </Box>
    )
}