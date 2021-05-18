<<<<<<< HEAD
import { render } from '@testing-library/react';
import { OrderDetailsProvider } from '../contexts/OrderDetails';

const renderWithContext = (ui, options) => render( ui, { wrapper: OrderDetailsProvider, ...options });

// re-export everythink 
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
=======
import {render} from '@testing-library/react';
import {OrderDetailsProvider} from '../contexts/OrderDetails';

const renderWithContext = (ui, options) => 
    render(ui, {wrapper: OrderDetailsProvider, ...options});

// re-export everything
export * from '@testing-library/react';

// override render method 
export { renderWithContext as render }; 
>>>>>>> 9d2b0800531120b30ffadc1a2c766bf42036505b
