import Sidebar from "@front/components/bar/Sidebar";

import "@styles/layout.scss";

export default function Layout({children} : { children : any }) {
  return (
    <main className="flex h-full global-layout">
      <aside className="flex-none global-sidebar">
        <Sidebar />
      </aside>
      <section className="flex-1 page-content">
        <div className="page-body">
          {children}
        </div>
      </section>
    </main>
  );
}