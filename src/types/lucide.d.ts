import 'lucide-react-native';
import { SvgProps } from 'react-native-svg';

declare module 'lucide-react-native' {
  export interface LucideProps extends SvgProps {
    color?: string;
    stroke?: string;
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
    className?: string;
  }
}
