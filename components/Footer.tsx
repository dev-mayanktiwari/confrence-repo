export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-2 md:mb-0 text-center md:text-left">
          © 2024 All rights reserved.
          <span className="text-yellow-400">
            1<sup>st</sup> National Conference on Computer and Communications
            (NC3 2025)
          </span>
        </div>
        <div className="text-sm text-center md:text-right">
          Organised by Galgotias Education Institutions
        </div>
      </div>
    </footer>
  );
}
