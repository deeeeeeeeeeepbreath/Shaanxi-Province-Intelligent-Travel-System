function map_start() {
  // 初始化百度地图
  const map = new BMapGL.Map("map"); // 创建地图实例
  const point = new BMapGL.Point(109.28, 34.25); // 设置中心点坐标
  map.centerAndZoom(point, 9); // 初始化地图，设置中心点和缩放级别
  map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

  // 添加比例尺控件
  const scaleCtrl = new BMapGL.ScaleControl();
  map.addControl(scaleCtrl);

  // 添加缩放控件
  const zoomCtrl = new BMapGL.ZoomControl();
  map.addControl(zoomCtrl);

  // 添加标记点
  // 点击标记点弹出三维模型界面
  const marker_xian = new BMapGL.Marker(new BMapGL.Point(108.95, 34.25));
  map.addOverlay(marker_xian);
  marker_xian.addEventListener('click', () => {
    alert('西安市');
  });
  const marker_GQL = new BMapGL.Marker(new BMapGL.Point(110.277, 34.847));
  map.addOverlay(marker_GQL);
  marker_GQL.addEventListener('click', () => {
    alert('鹳雀楼');
  });
  const marker_HGG = new BMapGL.Marker(new BMapGL.Point(110.924, 34.633));
  map.addOverlay(marker_HGG);
  marker_HGG.addEventListener('click', () => {
    alert('函谷关');
  });
  const marker_PJS = new BMapGL.Marker(new BMapGL.Point(110.34, 34.85));
  map.addOverlay(marker_PJS);
  marker_PJS.addEventListener('click', () => {
    alert('普救寺');
  });
  const marker_HS = new BMapGL.Marker(new BMapGL.Point(110, 34.5));
  map.addOverlay(marker_HS);  
  marker_HS.addEventListener('click', () => {
    alert('华山');
  });
  const marker_CHS = new BMapGL.Marker(new BMapGL.Point(109.01, 33.97));
  map.addOverlay(marker_CHS);  
  marker_CHS.addEventListener('click', () => {
    alert('翠华山');
  });

  // 添加地图类型控件
  const mapTypeCtrl = new BMapGL.MapTypeControl();
  map.addControl(mapTypeCtrl);

  // 添加指南针控件
  const navigationCtrl = new BMapGL.NavigationControl();
  map.addControl(navigationCtrl);
};

document.getElementById('show-map').addEventListener('click',function(){
  document.getElementById('show-map').classList.add('hidden');
});

document.getElementById('show-map').addEventListener('click',map_start);

document.getElementById('send-button').addEventListener('click', function () {
  const input = document.getElementById('chat-input').value;    //把这个input传给GPT
  const chatMessages = document.getElementById('chat-messages');
  if (input) {
    chatMessages.innerHTML += `<p>用户: ${input}</p>`;
    document.getElementById('chat-input').value = '';
    chatMessages.innerHTML += `<p>暂未开放</p>`;                //这里改为GPT输出结果
  }
});