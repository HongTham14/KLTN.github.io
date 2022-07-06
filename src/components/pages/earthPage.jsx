
import "./earthPage.css";
import Earth from "../../planet/earth";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import * as THREE from "three";
import React, { Suspense , Component} from "react";



export  function Earthpage() {
  return (
    
    <div className="container-earth">
      <div className="text">
      <div className="title">Ngành khoa học dữ liệu</div>
      <div className="content-earth">
        <div className="title_content">Giới thiệu</div>
        <div className="text_content">
          <p>Khoa học dữ liệu (KHDL) là khoa học về việc quản trị và phân tích dữ liệu để tìm ra các hiểu biết, các tri thức hành động, các quyết định dẫn dắt hành động. KHDL gồm ba phần chính: Tạo ra và quản trị dữ liệu, phân tích dữ liệu, và chuyển kết quả phân tích thành giá trị của hành động. </p>
          <p>Nôm na bước thứ nhất là về số hóa và bước thứ hai là về dùng dữ liệu. Việc phân tích và dùng dữ liệu lại dựa vào ba nguồn tri thức: toán học (thống kê toán học), công nghệ thông tin (máy học) và tri thức của lĩnh vực ứng dụng cụ thể.</p>
         
       </div>
       <div className="title_content">Ứng dụng của koa học dữ liệu</div>
        <div className="text_content">
          <p>Nếu phân tích dữ liệu về nhu cầu thị trường ta có thể quyết định cần nuôi bao nhiêu lợn mỗi nơi mỗi lúc.</p>
          
          <p> Amazon đã phân tích các lần mua hàng trước của bạn để dự đoán những món đồ bạn có thể sẽ thích mua và gửi quảng cáo tới</p>
          <p> Khi nghe nói về các thành tựu đột phá gần đây của Trí tuệ nhân tạo người nghe có thể cũng chưa biết rằng phần lớn chúng đều dựa vào các phương pháp và đột phá của KHDL.</p>
       </div>
      </div>

      </div>
      <div id="earth">
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}  >
        <Suspense fallback={null}>
          
        
          <Lights/>
          
             <Earth/>      

        </Suspense>
      </Canvas>
      </div>
      
    </div>

  );

  function Lights() {
    return (
      <>
        <ambientLight />
        <pointLight position={[0, 0, 3]} />
      </>
    );
  }
}
