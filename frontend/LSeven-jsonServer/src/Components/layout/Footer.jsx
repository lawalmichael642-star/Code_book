const Footer = () => {
     const footerDetails=[
          {title:'about',
               links:[
                    {name:"about us",url:"#"},
                    {name:"careers",url:"#"},
                    {name:"Blog",url:"#"},
               ]
          },
          {
               title:"support",
               links:[
                    {name:"contact us",url:"#"},
                    {name:"help center",url:"#"},
                    {name:"FAQ",url:"#"},

               ]
          },
          {
               title:"legal",
               links:[
                    {name:"terms of service",url:"#"},
                     {name:"private policy ",url:"#"},
                      {name:"cookie policy",url:"#"},
               ]
          },
          {
               title:"connect",
               links:[
                    {name:"twitter",url:"#"},
                    {name:"linkedin",url:"#"},
                    {name:"github",url:"#"},
               ]
          }
     ]
  return (
    <div>
      <footer className="border-t border-slate-200 dark:border-t-0 bg-white dark:bg-gray-900 mt-12">
        <div className="mx-auto max-w-7xl md:px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {footerDetails.map((section) => (
              <div key={section.title}>
                <h3 className="font-bold text-gray-900 dark-text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        className="hover:text-gray-900 dark:hover:text-white"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-200 dark:border-slate-700 pt-8 text-center dark:text-gray-400">
            <p>&copy; {new Date().getFullYear()} Your company.All right reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
