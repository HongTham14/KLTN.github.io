import styled from "styled-components";
import "./marsPage.css";
import Mars from "../../planet/mars"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import { Sun } from "../sun";


export  function Marspage() {
  return (
    
    <div className="container">
      <div className="text">
      <div className="title">Cơ hội việc làm</div>
      <div className="content">
      <div className="title_content_venus">Chuyên ngành kỹ thuật phần mềm</div>
       <div className="text_content_venus">
       <ul className="text_content_venus_list">
            <li> Quản lý dự án (PM)</li>
            <li>Lập trình viên (Coder)</li>
            <li>Kiểm thử phần mềm (Tester)</li>
            <li>Quản lý dự án Công nghệ Thông tin</li>
            <li>Kỹ sư đảm bảo chất lượng phần mềm</li>
            <li>Quản trị viên dự án phần mềm và CNTT</li>
          </ul>
       </div>
       <div className="title_content_venus">Chuyên ngành khoa học dữ liệu</div>
       <div className="text_content_venus">
       <ul className="text_content_venus_list">
            <li> Kỹ sư phát triển ứng dụng AI</li>
            <li>Chuyên gia nghiên cứu chuyên sâu về trí tuệ nhân tạo</li>
            <li>Kỹ sư dữ liệu, Phân tích kinh doanh… tại công ty công nghệ, Công ty viễn thông, Doanh nghiệp sản xuất. </li>
            <li>Nhà kinh doanh trong lĩnh vực Khoa học dữ liệu</li>
            <li>Làm công việc nghiên cứu, sáng tạo dữ liệu cho các cơ quan, tổ chức doanh nghiệp, tập đoàn kinh tế,...</li>
            <li>Giảng dạy tại các trường đại học, cao đẳng hay các cơ sở đào tạo ngành Khoa học dữ liệu.</li>
          </ul>
       </div>
      </div>

      </div>
      <div id="mars">
      <Canvas camera={{ position: [0, 0, 25], fov: 45 }}  >
        <Suspense fallback={null}>
          
          {/* < Sun/> */}
          <Lights/>
          
            <Mars/>     

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
