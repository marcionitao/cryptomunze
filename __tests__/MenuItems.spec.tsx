import { render, screen } from '@testing-library/react';
import MenuItems from '../src/components/template/MenuItems';

describe('MenuItems', () => {
  it('should render a link of items ', () => {
    // renderiza o componente e passar props
    render(<MenuItems url={'/'} texto={'Home'} />);

    // criando uma referencia a tag (a) link
    const link = screen.getByRole('link');
    // espero que o link  exista
    expect(link).toBeInTheDocument();
  });

  it('should render the items from list', () => {
    // renderiza o componente e passar props
    render(<MenuItems url={'/'} texto={'Home'} />);

    // espero que o url e texto existam
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
