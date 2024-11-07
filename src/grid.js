import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function BasicButtons() {
    return (
        <div>
            <Stack spacing={10} direction="row" display={"flex"} padding={5}  >
                <div> <h1>Ram</h1></div>
                <Button variant="contained">click here</Button>
            </Stack>

            <Stack spacing={5} direction="row" display={"flex"} padding={5} >
                <div> <h1>Aaryan</h1></div>
                <Button variant="contained">click here</Button>
            </Stack>

            <Stack spacing={10} direction="row" display={"flex"} padding={5} >
                <div> <h1>Anu</h1></div>
                <Button variant="contained">click here</Button>

            </Stack>

        </div>

    );
}