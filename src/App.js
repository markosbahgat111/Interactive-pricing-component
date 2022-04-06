import './App.scss';
import PricingComponent from './components/pricing.component';

function App() {
  return (
    <main className='flex flex-col items-center justify-between md:h-[70vh] h-screen w-11/12 md:w-[600px] mx-auto'>
      <section className='text-center mt-[20vh]  md:mt-0'>
        <h1 className='md:text-3xl text-xl font-bold' style={{color:"hsl(227, 35%, 25%)"}}>Simple, traffic-based pricing</h1>
        <h6 className='px-10' style={{color:"hsl(225, 20%, 60%)"}}>Sign-up for our 30-day trial. No credit card required</h6>
      </section>
      <div className='min-h-fit w-full mt-20 md:mt-0 pb-20 md:pb-0'>
        <PricingComponent/>
      </div>
    </main>
  );
}

export default App;
