import { Link, json } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({ message: "hello!" });
};

export default function Index() {
  return (
    <div>
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold text-gray-800">
              <Link to="/home">MySoundProfile</Link>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-gray-900">
                プロフィール
              </Link>
              <Link
                to="/settings"
                className="text-gray-600 hover:text-gray-900"
              >
                設定
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1>hello!</h1>
      </main>
    </div>
  );
}
