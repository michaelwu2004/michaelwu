
export interface CardProps {
  title: string,
  desc: string,
  date: string,
  stack: string[],
  link?: string
}

export default function Card(props: CardProps) {

  return (
    <div className="flex flex-col color5 rounded m-1 font-mono">
      <div className="m-1">
        {props.title}
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {props.stack && props.stack?.map((item, idx) => {
          return (
            <div key={idx} className="m-1 color4 p-1 rounded">
              {item}
            </div>
          )
        })}
      </div>
      {props.date &&
        <div>
          {props.date}
        </div>
      }
      {props.link &&
        <a href={props.link} className="color4 rounded-bl rounded-br">
          GitHub
        </a>
      }
    </div>
  )

}