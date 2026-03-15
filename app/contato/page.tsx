export default function ContactPage() {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="font-serif text-4xl md:text-6xl">Contato</h1>
      <p className="text-lg leading-8 text-muted">
        Disponível para oportunidades, consultoria e conversas sobre design de produto.
      </p>
      <ul className="space-y-3 text-lg text-muted">
        <li>
          Email: <a href="mailto:[seu-email]">[seu-email]</a>
        </li>
        <li>
          LinkedIn: <a href="https://br.linkedin.com/in/walterdarcie">walterdarcie</a>
        </li>
      </ul>
    </section>
  );
}
