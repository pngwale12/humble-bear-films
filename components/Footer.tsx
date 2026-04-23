import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-center">
      <p className="text-gray-500">
        © {new Date().getFullYear()} Humble Bear Films
      </p>

      <div className="flex justify-center gap-4 mt-4">
        <Instagram />
        <Mail />
      </div>
    </footer>
  );
}