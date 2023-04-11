import PasswordStrengthMeter from "./components/PasswordStrengthMeter";

function App() {
  return (
    <div className="container">
      <div className="col-md-6 mz-auto">
        <h3 className="text-center py-5">پسوردتو بزن</h3>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="پسورد شما" />
        </div>
        <PasswordStrengthMeter/>
      </div>
    </div>
  );
}

export default App;
