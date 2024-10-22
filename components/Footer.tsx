export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm mb-2 md:mb-0 text-center md:text-left">
          © 2023 All rights reserved. By{" "}
          <span className="text-yellow-400">
            30th National Conference on Communications (NCC 2024)
          </span>
        </div>
        <div className="text-sm text-center md:text-right">
          Jointly Organised By IIT Madras & IIT Tirupati
        </div>
      </div>
    </footer>
  );
}
