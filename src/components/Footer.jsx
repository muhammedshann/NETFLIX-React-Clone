import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white py-20 px-8">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
    
    {/* Company Section */}
    <div>
      <h4 className="font-semibold mb-3 text-gray-400">Company</h4>
      <ul className="space-y-2">
        <li><a href="#">About Netflix</a></li>
        <li><a href="#">Newsroom</a></li>
        <li><a href="#">Company Assets</a></li>
        <li><a href="#">Start watching</a></li>
      </ul>
    </div>

    {/* Connect Section */}
    <div>
      <h4 className="font-semibold mb-3 text-gray-400">Connect</h4>
      <ul className="space-y-2">
        <li><a href="#">Contact Us</a></li>
        <li className="flex space-x-4 mt-2">
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
        </li>
      </ul>
    </div>

    {/* Legal Section */}
    <div>
      <h4 className="font-semibold mb-3 text-gray-400">Legal</h4>
      <ul className="space-y-2">
        <li><a href="#">Terms and Conditions</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Cookie Preferences</a></li>
      </ul>
    </div>

  </div>
</footer>

    )
}
export default Footer;