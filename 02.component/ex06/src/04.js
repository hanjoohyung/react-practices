import fs from 'fs';
import update from 'react-addons-update';

let state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}

let updateOrder = update(state.order, {
    // 해당 패스의 값을 업데이트
    receive: {
        $set: "부산광역시 해운대구 우동사리 오동통통"
    },
    // 해당 패스의 값을 업데이트
    payment: {
        method: {
           $set: "Mobile"
        }
    },
    products: {
        // 배열의 요소를 업데이트
        0: {
            amount: {
                $set: 99
            }
        },
        // 배열의 요소를 추가
        $push: [{
            "no": "s002-002",
            "name": "블루양말",
            "price": 2000,
            "amount": 123    
        }]
    }
});

console.log(state.order, updateOrder, state.order === updateOrder, state.order.receive === updateOrder.receive);
