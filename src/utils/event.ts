import { EventHandler } from 'react';

export const preventDefault: EventHandler<any> = (e: Event) => e.preventDefault();
