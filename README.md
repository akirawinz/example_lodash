Schema Practice
===

เนื่องจากเห็นโค้ดของทุกคน บวกกับคำถามจากหลายๆ คน เลยรู้สึกว่าทุกคนยังจัดการ format schema ได้ไม่ค่อยคล่อง ดังนั้นมาฝึกกันดีกว่า

## วัตถุประสงค์
ฝึกการใช้ฟังก์ชัน Array `map()`, `filter()`, `find()`, `sort()`, `includes()` ให้คล่อง ทำให้ชีวิตดีขึ้นมาก

## การติดตั้ง
Clone โปรเจกต์นี้ และเข้าไปยังไดเรกทอรีของโปรเจกต์ จากนั้นพิมพ์
```shell
npm install
```

### รายละเอียดไฟล์
- `/app/corporation.json` - ไฟล์ข้อมูลดิบใช้ในการทำโจทย์
- `/app/interfaces.ts` - Interface ของข้อมูลดิบ
- `/app/index.ts` - ตัวอย่างการเรียกใช้งานข้อมูลดิบผ่าน Interface


### การรันไฟล์ TypeScript (.ts)

ให้พิมพ์คำสั่งดังนี้
```bash
npx ts-node [ชื่อไฟล์]
```

เช่น

```bash
npx ts-node /app/index.ts
```


## โจทย์

กำหนดให้ข้อมูลบริษัทหนึ่งมีดังนี้

```json
{
  "products": [
    {
      "id": 42261,
      "name": "Handcrafted Chicken",
      "material": "Rubber"
    }, ...
  ],
  "employees": [
    {
      "firstName": "Madge",
      "lastName": "Robel",
      "email": "Clotilde_OConner30@yahoo.com",
      "phone": "593-250-1650",
      "skills": [
        {
          "name": "Swimming",
          "level": "Expert"
        },
        {
          "name": "Driving",
          "level": "Godmaster"
        }, ...
      ],
      "products": [42261, ...]
    }, ...
  ]
}
```

- ดูข้อมูลฉบับเต็มได้ที่ `/app/corporation.json`
- และดู interface ทั้งหมดของโครงสร้างได้ที่ `/app/interfaces.ts`

### 1. จงเขียนโปรแกรมสร้างชุดของ product ที่มี material 'Metal', 'Steel' หรือ 'Wooden'
#### 1.1 เรียงลำดับตาม id จากน้อยไปมาก
รูปแบบข้อมูลส่งออกพร้อมตัวอย่าง
```javascript
[
  { id: 21810, name: 'Refined Chair', material: 'Steel' },
  { id: 38580, name: 'Rustic Mouse', material: 'Metal' },
  { id: 314556, name: 'Generic Shoes', material: 'Wooden' },
  ...
]
```
#### 1.2 เรียงลำดับจาก meterial ตามตัวอักษร และในแต่ละ material ให้เรียงลำดับโดยชื่อสินค้า (name) ตามตัวอักษร
รูปแบบข้อมูลส่งออกพร้อมตัวอย่าง
```javascript
[
  { id: 806564, name: 'Handmade Gloves', material: 'Metal' },
  { id: 461621, name: 'Refined Gloves', material: 'Metal' },
  { id: 38580, name: 'Rustic Mouse', material: 'Metal' },
  { id: 800753, name: 'Tasty Keyboard', material: 'Metal' },
  { id: 543727, name: 'Incredible Pants', material: 'Steel' },
  { id: 886716, name: 'Practical Soap', material: 'Steel' },
  ...
]
```

### 2.แสดงรายการชื่อเต็มของพนักงานที่มี Skill เลียข้อศอก ('Lick elbows') ระดับ 'Expert' และ 'Godmaster' แต่ต้องไม่มีทักษะ Cooking ผลลัพธ์เรียงลำดับโดยชื่อเต็มตามตัวอักษร
รูปแบบข้อมูลส่งออกพร้อมตัวอย่าง
```javascript
[
  { fullName: 'Alfred Ondricka', lickLevel: 'Expert' },
  { fullName: 'Ardith Rogahn', lickLevel: 'Godmaster' },
  ...
]
```

### 3. แสดงรายการอุปกรณ์ที่ทำจาก material 'Plastic' พร้อมผู้รับผิดชอบ โดยชั้นของ product ให้เรียงลำดับตาม id จากน้อยไปมาก ส่วนชั้นของ employee ให้เรียงลำดับ firstName ตามตัวอักษร
รูปแบบข้อมูลส่งออกพร้อมตัวอย่าง
```javascript
[
  {
    id: 127488,
    name: "Unbranded Towels",
    material: "Plastic",
    employees: [
      {
        firstName: "Elza",
        lastName: "Cole",
        email: "Troy.Stamm37@hotmail.com"
      },
      {
          firstName: "Emory",
          lastName: "Hintz",
          email: "Hulda.Howe16@yahoo.com"
      },
      ...
    ]
  }, {
    id: 137788,
    name: "Tasty Soap",
    material: "Plastic",
    employees: [
      {
        firstName: "Carlos",
        lastName: "Dickinson",
        email: "Lorine_Dickens@yahoo.com"
      },
      {
        firstName: "Coty",
        lastName: "Kovacek",
        email: "Dameon1@gmail.com"
      },
      ...
    ]
  },
  ...
]
```