import Button from '@mui/material/Button';
import { Colors } from '../constants/Colors';
import {Fonts} from '../constants/Fonts'

const { secondary, black } = Colors;
const { main } = Fonts;

interface PrimaryButtonProps {
    children: React.ReactNode;
}

interface SecondaryButtonProps {
    children: React.ReactNode;
}

export function PrimaryButton({ children }: PrimaryButtonProps) {
    return (
        <Button variant="contained" style={{ background: secondary, color: black, fontFamily: main, borderRadius: 20,width: '150px', height: '40px' }}>
            {children}
        </Button>
    );
}

export function SecondaryButton({ children }: SecondaryButtonProps) {
    return (
        <Button variant="contained" style={{ background: secondary, color: black, fontFamily: main, borderRadius: 20,width: '150px', height: '40px' }}>
            {children}
        </Button>
    );
}


