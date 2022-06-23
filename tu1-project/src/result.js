import bar from "./blu-bar.jpg";

const items = [
  { name: "john", num: 1, voted: 10 },
  { name: "tom", num: 2, voted: 20 },
  { name: "danny", num: 3, voted: 30 },
  { name: "july", num: 4, voted: 5 },
  { name: "annie", num: 5, voted: 10 },
];

function VotePercent(now) {
  let a = 0;
  for (let i = 0; i < items.length; i++) {
    a += items[i].voted;
  }
  return ((now / a) * 100).toFixed(2);
}

function Item({ item }) {
  return (
    <tr>
      <td width="150">
        {item.num}.{item.name}
      </td>
      <td width="500">
        <img src={bar} height="20" width={item.voted * 3} />
        {item.voted} ({VotePercent(item.voted)}%)
      </td>
    </tr>
  );
}

function Result() {
  return (
    <div>
      <h3>후보 별 득표율</h3>
      <table>
        {items.map(
          (
            item //items 에 해당하는걸 반복(map)
          ) => (
            <Item item={item} />
          )
        )}
      </table>
    </div>
  );
}

export default Result;
