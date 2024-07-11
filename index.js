const makeId = (length) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for(let i=0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result;
}

export const icon = (id, x=0, y=0, name='undefined', type='mxgraph.aws4.vpc') => `
        <mxCell id="${id}" value="${name}" style="fontColor=#232F3E;fillColor=#8C4FFF;strokeColor=#ffffff;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=${type};" parent="1" vertex="1">
          <mxGeometry x="${x}" y="${y}" width="80" height="80" as="geometry" />
        </mxCell>`

export const link = (id, dashed=false, source, target, color='#000000', text='') => `
        <mxCell id="${id}" value="${text}" style="orthogonalLoop=1;html=1;dashed=${dashed ? '1' : '0'};strokeColor=${color};" edge="1" parent="1" source="${source}" target="${target}">
          <mxGeometry relative="1" as="geometry" />
        </mxCell>`

export const page = (name, contents) => `<diagram id="${makeId(16)}" name="${name}">
    <mxGraphModel dx="1447" dy="1180" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" value="Background" parent="0" />${contents.join('')}
      </root>
    </mxGraphModel>
  </diagram>
`

export const doc = (contents) => `<mxfile modified="2024-05-29T11:54:30.865Z" host="Electron" agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) draw.io/24.1.0 Chrome/120.0.6099.109 Electron/28.1.0 Safari/537.36" etag="QHh42hkxG2dN2pCXdXV8" version="24.1.0" type="device">${contents.join('')}</mxfile>`