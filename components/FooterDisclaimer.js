import DonateButton from "./DonateButton";
import packageJson from '../package.json';

function FooterDisclaimer() {
  return (
    <div className="text-xs">
      <p className="mb-3"><a href="https://github.com/sarvessveeriyah2312" target="_blank" className="text-blue-600" rel="noopener">LinkPro</a> is a linked list single page built on React and Tailwind. <br className="hidden sm:block"/>
      If you find this useful, feel free to buy me a coffee 
      <br/>
      <a href="https://github.com/sarvessveeriyah2312/linkpro#readme" target="_blank" className="text-blue-600" rel="noopener">README</a>
      <br/><br/>
      <DonateButton />
      <i className="fa fa-coffee"></i></p>
      <p className="">Code with ❤️ by <a href="https://github.com/sarvessveeriyah2312" target="_blank" className="text-blue-600" rel="noopener">Sarvess Veeriyah</a></p>
    </div>
  );
}

export default FooterDisclaimer;
