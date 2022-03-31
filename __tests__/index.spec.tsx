import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('Home', () => {
  it('should render home page and check name of Title ', () => {
    const location = { pathname: '/' };
    // renderiza o componente
    render(<Home />);

    // const head = screen.getByRole('title');
    // expect(head).toBeInTheDocument();
    //expect(screen.getByTitle('CrypoMunze')).toBeInTheDocument();
    expect(screen.getByText('Merda')).toBeInTheDocument();
  });
});
