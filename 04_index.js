// @ts-nocheck
var list = [
  {
    authorityId: 1,
    authorityName: "数据分析",
    grade: "1001",
    fatherId: "0",
  },
  {
    authorityId: 2,
    authorityName: "商务政策",
    grade: "1002",
    fatherId: "0",
  },
  {
    authorityId: 3,
    authorityName: "市场动态",
    grade: "1003",
    fatherId: "0",
  },
  {
    authorityId: 4,
    authorityName: "消息中心",
    grade: "1004",
    fatherId: "0",
  },
  {
    authorityId: 5,
    authorityName: "个人中心",
    grade: "1005",
    fatherId: "0",
  },
  {
    authorityId: 6,
    authorityName: "价格查询分析",
    grade: "2101",
    fatherId: "1001",
  },
  {
    authorityId: 7,
    authorityName: "销量查询分析",
    grade: "2102",
    fatherId: "1001",
  },
  {
    authorityId: 8,
    authorityName: "装备查询分析",
    grade: "2103",
    fatherId: "1001",
  },
  {
    authorityId: 9,
    authorityName: "政策数据分析",
    grade: "2201",
    fatherId: "1002",
  },
  {
    authorityId: 10,
    authorityName: "政策原件下载",
    grade: "2202",
    fatherId: "1002",
  },
  {
    authorityId: 11,
    authorityName: "新车上市",
    grade: "2301",
    fatherId: "1003",
  },
  {
    authorityId: 12,
    authorityName: "营销活动",
    grade: "2302",
    fatherId: "1003",
  },
];

var data = []

function loop(list, data, fatherId) {
list.forEach(item => {
    if (item.fatherId === fatherId) {
        var child = {
            label: item.authorityName,
            grade: item.grade,
            children: []
        }

        loop(list, child.children, item.grade)

        data.push(child)
    }
})
}

loop(list, data, '0')

console.log(data)

// @ts-ignore
// forDataTree(list);

// @ts-ignore
// function forDataTree(data) {
//   // @ts-ignore
//   let parents = data.filter((p) => p.fatherId === "0"),
//     // @ts-ignore
//     children = data.filter((c) => c.fatherId !== "0");
//   dataTree(parents, children);
//   console.log(parents, "000000");
//   function dataTree(parents, children) {
//     parents.map((p) => {
//       children.map((c) => {
//         if (c.grade === p.fatherId) {
//           let _children = JSON.parse(JSON.stringify(children));
//           _children.splice(i,1)
//           dataTree([c], _children);
//           if (p.children) {
//             p.children.push(c);
//           } else {
//             p.children = [c];
//           }
//         }
//       });
//     });
//   }
// }
