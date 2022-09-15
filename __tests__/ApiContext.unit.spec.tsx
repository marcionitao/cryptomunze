import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';
import * as API from '../src/data/base_api';
import ApiContext, { ApiProvider } from '../src/data/context/ApiContext';

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
  jest.useFakeTimers();
});

jest.spyOn(API, 'myApi').mockImplementation(() =>
  Promise.resolve({
    FullName: 'Ethereum',
    Name: 'ETH',
  } as any),
);

describe('<ApiProvider />', () => {
  //
  const { result } = renderHook(() => useContext(ApiContext));
  //
  const TestComponent = () => {
    const { coins } = useContext(ApiContext);

    return (
      <div>
        <p data-testid="fullname">{coins?.FullName}</p>
        <p data-testid="name">{coins?.Name}</p>
      </div>
    );
  };

  it('should show initial state empty', () => {
    expect(result.current.coins).toEqual([]);
  });

  it('should call HTTP request for get the Coins, and update state after of each Interval(10000) 1m ', async () => {
    //
    jest.useFakeTimers();

    render(
      <ApiProvider>
        <TestComponent />
      </ApiProvider>,
    );

    await waitFor(async () => {
      expect(API.myApi).toHaveBeenCalledTimes(1);
    });

    jest.advanceTimersByTime(10000);

    await waitFor(async () => {
      expect(API.myApi).toHaveBeenCalledTimes(2);
      expect(await API.myApi()).toEqual({ FullName: 'Ethereum', Name: 'ETH' }); // Success!
    });
  });

  it('proper data is sent to the component', async () => {
    render(
      <ApiProvider>
        <TestComponent />
      </ApiProvider>,
    );

    const fullName = screen.getByTestId('fullname');
    const name = screen.getByTestId('name');

    await waitFor(() => {
      expect(fullName.textContent).toBe('Ethereum');
      expect(name.textContent).toBe('ETH');
    });
  });
});
