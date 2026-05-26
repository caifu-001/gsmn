const list = [
  {
    month: "2026-03",
    income: "12940.89",
    tax: "121.47"
  },
  {
    month: "2026-02",
    income: "12838.97",
    tax: "118.41"
  },
  {
    month: "2026-01",
    income: "12800.00",
    tax: "121.88"
  }
];

function Card({ item }) {
  return (
    <div className="card">
      <div className="card-top">
        <div className="title">工资薪金</div>
        <div className="month">{item.month}</div>
      </div>

      <div className="desc">所得项目小类：正常工资薪金</div>

      <div className="desc">
        扣缴义务人：北京天融信网络安全技术...
      </div>

      <div className="money">收入：{item.income}元</div>

      <div className="money">已申报税额：{item.tax}元</div>

      <div className="arrow">›</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app">

      <div className="navbar">
        <div className="back">‹ 返回</div>

        <div className="nav-title">
          收入纳税明细
        </div>

        <div className="appeal">
          批量申诉
        </div>
      </div>

      <div className="summary">
        <div className="row">
          <div className="left">
            收入合计：
          </div>

          <div className="right">
            54288.56元
          </div>
        </div>

        <div className="line"></div>

        <div className="row">
          <div className="left">
            已申报税额合计：
          </div>

          <div className="right">
            476.27元
          </div>
        </div>
      </div>

      <div className="small-card">
        <div>收入：5008.70元</div>
        <div>已申报税额：0.26元</div>
      </div>

      {list.map((item, index) => (
        <Card item={item} key={index} />
      ))}

    </div>
  );
}