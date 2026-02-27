import random

def generate_vibrant_tech_bg(filename="public/images/tech_pattern.svg"):
    width = 1920
    height = 1080
    
    # Vibrant high-end colors
    indigo = "#6366f1"
    magenta = "#d946ef"
    cyan = "#06b6d4"
    
    svg = f'<svg width="{width}" height="{height}" viewBox="0 0 {width} {height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">'
    svg += '<defs>'
    # Dynamic Gradient for connections
    svg += f'<linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">'
    svg += f'<stop offset="0%" style="stop-color:{indigo};stop-opacity:0.3" />'
    svg += f'<stop offset="50%" style="stop-color:{magenta};stop-opacity:0.1" />'
    svg += f'<stop offset="100%" style="stop-color:{cyan};stop-opacity:0.3" />'
    svg += '</linearGradient>'
    
    # Glow for nodes
    svg += '<filter id="vibrantGlow" x="-50%" y="-50%" width="200%" height="200%">'
    svg += '<feGaussianBlur stdDeviation="5" result="blur"/>'
    svg += '<feComposite in="SourceGraphic" in2="blur" operator="over"/>'
    svg += '</filter>'
    svg += '</defs>'
    
    # Dark base with transparency for mix-blend-mode
    svg += '<rect width="100%" height="100%" fill="transparent"/>'
    
    # Nodes and Connections
    nodes = []
    for _ in range(25):
        nodes.append((random.randint(50, width-50), random.randint(50, height-50)))
        
    for i, (x1, y1) in enumerate(nodes):
        # connections
        for j in range(i + 1, len(nodes)):
            x2, y2 = nodes[j]
            dist = ((x1-x2)**2 + (y1-y2)**2)**0.5
            if dist < 450:
                opacity = (1 - dist/450) * 0.25
                svg += f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="url(#lineGrad)" stroke-width="1.5" opacity="{opacity}" />'
        
        # vibrant nodes
        color = random.choice([indigo, magenta, cyan])
        svg += f'<circle cx="{x1}" cy="{y1}" r="4" fill="{color}" filter="url(#vibrantGlow)" opacity="0.6" />'

    # Scattered particles with color
    for _ in range(150):
        x = random.randint(0, width)
        y = random.randint(0, height)
        color = random.choice([indigo, cyan, "white"])
        opacity = random.uniform(0.1, 0.3)
        size = random.uniform(0.5, 1.5)
        svg += f'<circle cx="{x}" cy="{y}" r="{size}" fill="{color}" opacity="{opacity}" />'

    svg += '</svg>'
    
    with open(filename, "w") as f:
        f.write(svg)

generate_vibrant_tech_bg()
