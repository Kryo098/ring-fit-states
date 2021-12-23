

const ViewPoints = (data) => {
  const viewW = window.innerWidth
  const s_min = 200
  const s_max = 600
  const m_max = 1200

  if (viewW >= s_min && viewW <= s_max) {
    return {index: 22, height: 40, margin: 20, size: 17}
  } else if (viewW >= s_max && viewW <= m_max) {
    return {index: 20, height: 45, margin: 20, size: 18}
  } else {
    return {index: 18, height: 50, margin: 50, size: 20}
  }
}

export default ViewPoints