import { IconType } from '@components/Icon';

export interface RouteConfig {
  path: string;
  icon: IconType;
  label: string;
  component: React.ComponentType;
}
