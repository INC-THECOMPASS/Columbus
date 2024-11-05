import { onEvent } from '../../helpers/lifecycleManager';

export const testFunction = () => {
};

onEvent('DOMContentLoaded', testFunction);
