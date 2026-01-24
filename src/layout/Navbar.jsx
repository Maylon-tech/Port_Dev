import Button from "../components/Button"


const navLinks = [
  {
    href: "#about",
    label: "About"
  },
  {
    href: "#projects",
    label: "Projects"
  },
  {
    href: "#experience",
    label: "Experience"
  },
  {
    href: "#testimonials",
    label: "Testimonials"
  },
]


const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href=""
          className="text-xl font-bold tracking-tight text-primary"
        >
          PM<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div>
          <div className="">
            {
              navLinks.map((link, index) => (
                <a
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
                  href={link.href}
                  key={index}
                > 
                  {link.label}
                </a>
              ))
            }
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="">
          <Button size="sm">Contact Me</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
