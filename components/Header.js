function Header() {
  return (
    <header className="container flex text-center mx-auto py-10">
      <div className="md:w-4/6 mx-auto">
        <img src="profile-pic.jpg" alt="Profile Picture" className="h-24 rounded-full mx-auto mb-6" />
        <h1 className="font-bold">Sarvess Veeriyah</h1>
        <p>Software Engineering Student</p>
      </div>
    </header>
  );
}

export default Header;
