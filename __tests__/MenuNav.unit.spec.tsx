import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';
import singletonRouter from 'next/router';
import MenuNav from '../src/components/template/MenuNav';

jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));

const itemAtivo = 'text-yellow-50 border-b-4 border-yellow-500';
const itemInativo = 'text-indigo-300';

const MockMenuItems = jest.fn();

// eslint-disable-next-line react/display-name
jest.mock('../src/components/template/MenuItems', () => props => {
  MockMenuItems(props);
  return (
    <a href={props.url} className={itemInativo} data-testid="MenuItems">
      {props.texto}
    </a>
  );
});

describe('MenuNav', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('should render the component', () => {
    render(<MenuNav />);

    expect(screen.getByTestId('menu-nav')).toBeInTheDocument();
  });

  it('should select menu item("Home"), check pathname: / and if className: itemInativo', async () => {
    // const { result } = renderHook(() => useRouter());
    //
    act(() => {
      singletonRouter.push({
        pathname: '/',
        query: {
          url: '/',
          texto: 'Home',
          className: itemInativo,
        },
      });
    });

    render(<MenuNav />);

    await waitFor(() => {
      expect(singletonRouter).toMatchObject({
        pathname: '/',
        query: {
          url: '/',
          texto: 'Home',
          className: itemInativo,
        },
      });
    });
  });

  it('should select menu item("List Coins"), check pathname: / and if className: itemInativo', async () => {
    // const { result } = renderHook(() => useRouter());

    act(() => {
      singletonRouter.push({
        pathname: '/list',
        query: {
          url: '/list',
          texto: 'List Coins',
          className: itemInativo,
        },
      });
    });
    render(<MenuNav />);
    await waitFor(() => {
      expect(singletonRouter).toMatchObject({
        pathname: '/list',
        query: {
          url: '/list',
          texto: 'List Coins',
          className: itemInativo,
        },
      });
    });
  });

  it('should select menu item("About"), check pathname: /about and if className: itemAtivo', async () => {
    //const { result } = renderHook(() => useRouter());
    //
    act(() => {
      singletonRouter.push({
        pathname: '/about',
        query: {
          url: '/about',
          texto: 'About',
          className: itemAtivo,
        },
      });
    });

    render(<MenuNav />);

    await waitFor(() => {
      expect(singletonRouter).toMatchObject({
        pathname: '/about',
        query: {
          url: '/about',
          texto: 'About',
          className: itemAtivo,
        },
      });
    });
  });
});
