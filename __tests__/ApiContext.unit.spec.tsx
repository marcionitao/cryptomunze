import { renderHook } from '@testing-library/react-hooks';
import { useContext } from 'react';
import ApiContext from '../src/data/context/ApiContext';

describe('ApiContext', () => {
  it('should return a list of 10 coins', async () => {
    //const wrapper = ({ children }) => <ApiProvider>{children}</ApiProvider>;
    const { result, waitForNextUpdate } = renderHook(() => useContext(ApiContext));
    waitForNextUpdate();
    // console.log(result.current.coins);
    expect(result.current?.coins).toHaveLength(0);
  });
});
