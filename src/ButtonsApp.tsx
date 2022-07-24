import { Button } from './components/Button';

export const ButtonsApp = () => {
  return (
    <main className="container">
      <div>
        <code>{'<Button />'}</code>
        <Button />
      </div>
      
      <div>
        <code>{'<Button variant="outline" />'}</code>
        <Button color="primary" variant="outline" />
      </div>

      <div>
        <code>{'<Button variant="text" />'}</code>
        <Button color="primary" variant="text" />
      </div>

      <div>
        <code>{'<Button disabledShadow />'}</code>
        <Button disabledShadow color="primary" />
      </div>

      <div className="row">
        <div>
          <code>{'<Button disabled />'}</code>
          <Button disabled />
        </div>
        <div>
          <code>{'<Button disabled variant="text" />'}</code>
          <Button disabled variant="text" />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<Button startIcon="shopping_cart" />'}</code>
          <Button startIcon="shopping_cart" color="primary" />
        </div>
        <div>
          <code>{'<Button endIcon="shopping_cart" />'}</code>
          <Button endIcon="shopping_cart" color="primary" />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<Button size="sm" />'}</code>
          <Button size="sm" color="primary" />
        </div>
        <div>
          <code>{'<Button size="md" />'}</code>
          <Button size="md" color="primary" />
        </div>
        <div>
          <code>{'<Button size="lg" />'}</code>
          <Button size="lg" color="primary" />
        </div>
      </div>

      <div className="row">
        <div>
          <code>{'<Button color="default" />'}</code>
          <Button color="default" />
        </div>
        <div>
          <code>{'<Button color="primary" />'}</code>
          <Button color="primary" />
        </div>
        <div>
          <code>{'<Button color="secondary" />'}</code>
          <Button color="secondary" />
        </div>
        <div>
          <code>{'<Button color="danger" />'}</code>
          <Button color="danger" />
        </div>
      </div>
    </main>
  );
};
