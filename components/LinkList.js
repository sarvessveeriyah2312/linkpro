import links from '../json/links.json'

function LinkList() {
  return (
    <main className="flex px-3 sm:px-0">
      <ul className="w-4/5 md:w-4/5 lg:w-3/6 mx-auto">
        {links.map(link => (
          <li className="mb-4" key={link.title}>
            <a
              className="relative transition duration-200 font-bold  bg-blue-600 border-blue-800 border-2 hover:bg-transparent py-4 w-75 block text-center text-white hover:text-blue-400 rounded-full pl-10 md:px-12"
              href={link.url}
              alt={link.title}
              target="_blank"
              rel="noopener"
            >
              <span className="text-3xl absolute left-0 top-0 bottom-0 pl-3 flex items-center">{link.emoji}</span>
              <span>{link.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default LinkList;
