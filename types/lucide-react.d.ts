declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';

  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }

  export type Icon = ComponentType<IconProps>;

  export const Phone: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Send: Icon;
  export const Home: Icon;
  export const ShoppingCart: Icon;
  export const Calendar: Icon;
  export const Clock: Icon;
  export const CheckCircle: Icon;
  export const Star: Icon;
} 