/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MenuItems from '../src/components/template/MenuItems';

const MenuItemsProps = {
  url: 'http://localhost/',
  texto: 'Home',
  className: 'text-yellow-50 border-b-4 border-yellow-500',
};

const renderMenuItems = () => render(<MenuItems {...MenuItemsProps} />);

describe('MenuItems', () => {
  it('should render a link of items ', () => {
    // renderiza o componente e passar props
    renderMenuItems();

    // criando uma referencia a tag (a) link
    const link = screen.getByRole('link');
    // espero que o link  exista
    expect(link).toBeInTheDocument();
  });

  it('should render the items from list', () => {
    // renderiza o componente e passar props
    renderMenuItems();

    // verifica se o "texto" e "url" está renderizado corretamente no DOM
    expect(screen.getByText(new RegExp(MenuItemsProps.texto, 'i'))).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveProperty('href', MenuItemsProps.url);
  });
});
