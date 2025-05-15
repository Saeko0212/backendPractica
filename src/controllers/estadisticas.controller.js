import { pool2 } from '../db.js';

// Obtener el Total de ventas por año
export const totalVentasPorAño = async (req, res) => {
  try {
    const [result] = await pool2.query(
      ` SELECT t.año, ROUND(SUM(hv.total_linea), 2) AS total_ventas
        FROM Hecho_Ventas hv
        JOIN Dim_Tiempo t ON hv.fecha = t.fecha
        GROUP BY t.año
ORDER BY t.año;`
    );
    if (result.length === 0) {
      return res.status(404).json({
        mensaje: 'No se encontraron estadisticas de ventas.',
      });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al obtener  las estadisticas de ventas.',
      error: error.message,
    });
  }
};

// Obtener el Total de ventas por mes
export const totalVentasPorMes = async (req, res) => {
  try {
    const [result] = await pool2.query(
      ` SELECT t.mes, ROUND(SUM(hv.total_linea),1) AS total_ventas
        FROM Hecho_Ventas hv
        JOIN Dim_Tiempo t ON hv.fecha = t.fecha
        GROUP BY t.mes
        ORDER BY t.mes;`
    );
    if (result.length === 0) {
      return res.status(404).json({
        mensaje: 'No se encontraron estadisticas de ventas.',
      });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al obtener  las estadisticas de ventas.',
      error: error.message,
    });
  }
};


// Obtener el Total de ventas por día
export const totalVentasPorDia = async (req, res) => {
  try {
    const [result] = await pool2.query(
      ` SELECT DATE_FORMAT(t.fecha, '%Y-%m-%d') AS dia, SUM(hv.total_linea) AS total_ventas
        FROM Hecho_Ventas hv
        JOIN Dim_Tiempo t ON hv.fecha = t.fecha
        GROUP BY t.fecha
        ORDER BY t.fecha; `
    );
    if (result.length === 0) {
      return res.status(404).json({
        mensaje: 'No se encontraron estadisticas de ventas.',
      });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al obtener  las estadisticas de ventas.',
      error: error.message,
    });
  }
};
