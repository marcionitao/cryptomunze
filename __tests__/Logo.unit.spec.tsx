import { render, screen } from '@testing-library/react';
import Logo from '../src/components/template/Logo';

const LogoProps = {
  className: 'mb-2',
  titulo: 'CrypoMunze',
  src: 'http://localhost/images/logo.png',
};

jest.mock(
  'next/image',
  () =>
    function Image({ src, alt }) {
      return <img src={src} alt={alt} />;
    },
);

const renderLogo = () => render(<Logo {...LogoProps} />);

describe('Logo', () => {
  it('should render Logo component propers', async () => {
    // renderiza o componente Logo com props
    renderLogo();
    // screen.logTestingPlaygroundURL();
    const image = screen.getByRole('img');
    // verifica se o titulo está renderizado corretamente no DOM
    expect(screen.getByText(new RegExp(LogoProps.titulo, 'i'))).toBeInTheDocument();
    // espero que o elemeto com o id="image-logo" contenha a imagem do produto na propriedade "src"
    expect(image).toHaveProperty('src', LogoProps.src);
  });
});
