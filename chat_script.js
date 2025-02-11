function map_start() {
  // 初始化百度地图
  const map = new BMapGL.Map("map"); // 创建地图实例
  const point = new BMapGL.Point(108.95, 34.25); // 设置中心点坐标
  map.centerAndZoom(point, 8); // 初始化地图，设置中心点和缩放级别
  map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

  // 添加比例尺控件
  const scaleCtrl = new BMapGL.ScaleControl();
  map.addControl(scaleCtrl);

  // 添加缩放控件
  const zoomCtrl = new BMapGL.ZoomControl();
  map.addControl(zoomCtrl);

  // 添加标记点
  const marker_xian = new BMapGL.Marker(point);
  map.addOverlay(marker_xian);
  marker_xian.addEventListener('click', () => {
    alert('西安市');
  });
  const marker_GQL = new BMapGL.Marker(new BMapGL.Point(110.277, 34.847));
  map.addOverlay(marker_GQL);
  marker_GQL.addEventListener('click', () => {
    alert('鹳雀楼');
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
  const input = document.getElementById('chat-input').value;
  const chatMessages = document.getElementById('chat-messages');
  if (input) {
    chatMessages.innerHTML += `<p>用户: ${input}</p>`;
    document.getElementById('chat-input').value = '';
  }
});