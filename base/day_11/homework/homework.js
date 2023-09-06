// 1. Tổng quan về hashmap
// - Hashmap là 1 cấu trúc dữ liệu trong javascript. 
// - Hashmap cung cấp 1 cách hiệu quả để lưu trữ dữ liệu và truy cập dữ liệu(Chèn, Truy Vấn, Cập Nhật, Xóa) với độ phức tạp (1)
// - Nó tối ưu hóa việc tìm kiếm và truy cập giá trị liên quan tới [1 key cụ thể] mà [không cần duyệt toàn bộ dữ liệu]
// - Đối với key và value thì key có thể là bất cứ kiểu dữ liệu nào và value có thể là bất kỳ giá trị nào. 
// - hashmap không đảm bảo thứ tự phần tử do đó nếu muốn truy cập dữ liệu dựa trên thứ tự thì hashmap có thể
// không trả ra kết quả chính xác
// //---------------------------------------


// Example 1: TwoSum

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input:  nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]


// const test = new Map();
// const x = demo.set(9,[2,7,11,15]);
// x.foreach(index,array){
//     return array[i],array[j]
// }

// const demo = new Map();
// function TinhToan(target, array){
//  demo.set(target,array);


// }

// const array = [2,7,11,15]
// const number = 9;
// const test = TinhToan(number,array);
// console.log(test);

// const nums = [2,7,11,15]; 
{ 
    const i = 0;
    {
        const j = 0;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 1;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 2;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 3;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
}
{ 
    const i = 1; 
    {
        const j = 0;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 1;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 2;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 3;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
}
{ const i = 2;
    {
        const j = 0;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 1;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 2;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 3;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
}
{ 
    const i = 3;
    {
        const j = 0;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 1;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 2;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
    {
        const j = 3;
        if(nums[i] + nums[j] === target){
            return [ nums[i], nums[j]];
        }
    }
}

function Tinh(nums,target){
    for(let i = 0; i< nums.length ; i++){ 
        for(let j= 0; j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [ nums[i], nums[j]];
            }
        }
    }
}
const arr = [2,7,11,15];
const demo = Tinh(arr,18);
console.log(demo);


