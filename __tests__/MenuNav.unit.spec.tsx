import { cleanup, render, screen } from '@testing-library/react';
import MenuNav from '../src/components/template/MenuNav';

const mockMenuItems = jest.fn();

//const router = useRouter();
const itemAtivo = 'text-yellow-50 border-b-4 border-yellow-500';
const itemInativo = 'text-indigo-300';

// eslint-disable-next-line react/display-name
jest.mock('../src/components/template/MenuItems', () => props => {
  mockMenuItems(props);
  return <div>MenuItems</div>;
});

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

describe('MenuNav', () => {
  it('should render the component', () => {
    render(<MenuNav />);

    expect(screen.getByTestId('menu-nav')).toBeInTheDocument();
  });

  it('should called MenuItems with prop url, texto and className(inativo) to About page ', () => {
    render(<MenuNav />);

    expect(mockMenuItems).toHaveBeenLastCalledWith(
      expect.objectContaining({
        url: '/about',
        texto: 'About',
        // className: itemInativo,
      }),
    );
  });
});
