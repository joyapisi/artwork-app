import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import Home from '../components/Home';
import Store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Home', () => {
  test('Render the Home Component', () => {
    const tree = TestRenderer.create(
      <BrowserRouter>
        <Provider store={Store}>
          <Home />
        </Provider>
        ,
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
